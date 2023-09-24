export let APP_NAME: string = "WBL-WebApp"
export let BASE_URL: string | undefined = process.env.NODE_ENV === 'production' ? '/WBL-WebApp/' : undefined