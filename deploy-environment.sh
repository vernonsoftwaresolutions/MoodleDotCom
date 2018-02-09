#!/bin/bash

set -e

ENVIRONMENT=$1
STACK_NAME=$2
BUCKET_NAME=$3
DOMAIN_NAME=$4
SITE_NAME=$5
HOSTED_ZONE_EXISTS=$6
##first, retrieve certificate arn

certarn=`aws cloudformation describe-stacks \
                    --stack-name "${STACK_NAME}" --query \
                    "Stacks[0].[Outputs[? starts_with(OutputKey, 'WebsiteCertficationArn')]][0][*].{OutputValue:OutputValue}" \
                    --output text`

echo "certificate arn retrieved ${certarn}"

##package the site yaml file
aws cloudformation package --template-file moodle-site.yaml \
--output-template-file s3-output.yml --s3-bucket "${BUCKET_NAME}"

##deploy site 
aws cloudformation deploy --template-file s3-output.yml --stack-name "${ENVIRONMENT}-s3-stack" \
--parameter-overrides DomainName="${DOMAIN_NAME}" FullDomainName="${SITE_NAME}" \
HostedZoneExists="${HOSTED_ZONE_EXISTS}" AcmCertificateArn="${certarn}"