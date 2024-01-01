# Cloudflare functions

This is a sample code which runs in cloudflare as serverless service.
## Pre-requisite
You should have cloudflare account have access to the web dashboard.

## To install cloudflare CLI

```bash
> sudo npm install -g wrangler
```

## To login to cloudflare from CLI
```bash
> wrangler login
```

To create a new project (from already existing cloudflare deployment 'test-deployment')
```bash
wrangler init --from-dash test-deployment
```

## Locally run the development server

```python
> server npm run start
```


## Deploy your application
```python
> npm run deploy
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
