import swaggerJsdoc from "swagger-jsdoc";

const swaggerOptions: swaggerJsdoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Dungeons & Dragons character sheet manager",
            version: "1.0.0",
            description:
                "This is the API documentation for the Dungeons & Dragons character sheet manager.",
        },
        servers: [
            {
                url: "http://localhost:3000/api/v1",
                description: "Local server",
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
    },
    apis: [
        "./src/api/v1/controllers/*.ts",
        "./src/api/v1/errors/*.ts",
        "./src/api/v1/middleware/*.ts",
        "./src/api/v1/models/*.ts",
        "./src/api/v1/repositories/*.ts",
        "./src/api/v1/routes/*.ts",
        "./src/api/v1/services/*.ts",
        "./src/api/v1/types/*.ts",
        "./src/api/v1/utils/*.ts",
        "./src/api/v1/validation/*.ts"
    ]
};

// Generate the Swagger spec
export const generateSwaggerSpec = (): object => {
    return swaggerJsdoc(swaggerOptions);
};