module.exports = {
  apps: [
    {
      name: 'monitor',
      script: 'bin/www',
      max_memory_restart: '512M',
      env: {
        PORT: '3000',
        NODE_ENV: 'production'
      }
    }
  ]
}
