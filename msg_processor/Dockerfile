FROM public.ecr.aws/lambda/nodejs:latest

COPY . ${LAMBDA_TASK_ROOT}

RUN npm install

CMD ["index.handler"]
