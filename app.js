## Application Entry Point and Request Handling

The application is built using the Express.js framework and serves as the primary entry point for the web application. It is responsible for initializing the server, loading configuration values, serving static assets, rendering views, and exposing application endpoints.

### Application Initialization

The Express framework is imported and instantiated to create the web server. The Node.js `path` module is also included to ensure file paths are resolved correctly across different operating systems.

### Environment Configuration

Several runtime settings are retrieved from environment variables to support flexible deployment across development and production environments:

| Variable | Purpose                                         | Default Value  |
| -------- | ----------------------------------------------- | -------------- |
| APP_ENV  | Identifies the current deployment environment   | development    |
| APP_NAME | Application name displayed within the interface | Azure Node App |
| PORT     | Network port used by the application            | 3000           |

If any of these variables are not defined, the application automatically falls back to the specified default values.

### Static File Delivery

The application serves static resources such as CSS stylesheets, JavaScript files, and images from the `public` directory. This allows client-side assets to be accessed directly by web browsers.

### View Engine Configuration

Server-side rendering is implemented using the EJS templating engine. The application is configured to load template files from the `views` directory and render dynamic content before sending responses to users.

### Home Route

A route is defined for the root URL (`/`). When accessed, the application renders the `index.ejs` template and passes the application name and current environment as dynamic values.

### Health Check Endpoint

A dedicated health endpoint (`/health`) is provided for monitoring and diagnostics purposes. When requested, the endpoint returns a JSON response indicating the operational status of the application along with the active environment configuration.

Example response:

```json
{
  "status": "ok",
  "environment": "production"
}
```

### Server Startup

The application listens for incoming requests on the configured port. Once the server starts successfully, a confirmation message is written to the console indicating the active listening port.

This startup message assists administrators and developers in verifying that the application has launched correctly.
