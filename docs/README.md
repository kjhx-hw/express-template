# ![Logo Header](img/header.png)

```
.
├── docs/
│   └── README.md
├── src/                        # all JS code
│   ├── app/
│   │   ├── feature_name/       # related middleware functions
│   │   │   ├── controller.ts   # feature middleware
│   │   │   └── routes.ts       # configure / export router
│   │   └── index.ts            # app object configuration
│   ├── model/                  # data models & logic
│   ├── test/                   # test cases
│   ├── config.ts               # project configuration
│   └── server.ts               # entry point
├── sass/                       # sass source files
├── sessions/                   # saved session files
├── static/                     # all static files
│   ├── css/
│   ├── img/
│   └── js/
├── templates/                  # Handlebars templates
│   ├── feature_name/           # Templates for a specific feature
│   ├── layouts/                # Layout definition
│   │   └── main.hbs            # Default page template
│   ├── error.hbs
│   └── index.hbs
├── package-lock.json
├── package.json
└── tsconfig.json               # TypeScript configuration
```