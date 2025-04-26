# BOD Holdings - Corporate Website (Laravel MVC Structure)

A professional corporate website for BOD Holdings, a holding company that manages multiple subsidiaries across diverse sectors. This project follows the Laravel MVC architecture.

## Project Overview

This project has been restructured to follow Laravel's MVC (Model-View-Controller) architecture pattern. It utilizes Laravel's features for robust routing, template inheritance with Blade, database models, and controller logic.

## Features

- Responsive design (mobile, tablet, desktop)
- RTL support for Arabic language
- Interactive elements (counters, filtering, animations)
- Contact form with validation
- Modern, professional design
- Follows Laravel MVC architecture

## MVC Architecture

- **Models**: Database interaction and business logic
- **Views**: Blade templates for frontend presentation
- **Controllers**: Handle requests and coordinate between models and views

## Directory Structure

```
BOD/
├── app/
│   ├── Http/
│   │   ├── Controllers/
│   │   │   ├── HomeController.php
│   │   │   ├── AboutController.php
│   │   │   ├── SubsidiariesController.php
│   │   │   ├── SectorsController.php
│   │   │   ├── NewsController.php
│   │   │   ├── CareersController.php
│   │   │   └── ContactController.php
│   │   ├── Middleware/
│   │   └── Requests/
│   │       └── ContactFormRequest.php
│   ├── Models/
│   │   ├── Subsidiary.php
│   │   ├── Sector.php
│   │   ├── News.php
│   │   ├── Career.php
│   │   └── Contact.php
│   └── Providers/
├── config/
├── database/
│   ├── migrations/
│   │   ├── create_subsidiaries_table.php
│   │   ├── create_sectors_table.php
│   │   ├── create_news_table.php
│   │   ├── create_careers_table.php
│   │   └── create_contacts_table.php
│   └── seeders/
│       ├── SubsidiarySeeder.php
│       ├── SectorSeeder.php
│       └── NewsSeeder.php
├── public/
│   ├── css/
│   │   └── app.css
│   ├── js/
│   │   └── app.js
│   └── images/
├── resources/
│   ├── css/
│   │   └── app.css
│   ├── js/
│   │   └── app.js
│   └── views/
│       ├── layouts/
│       │   ├── app.blade.php
│       │   └── partials/
│       │       ├── header.blade.php
│       │       └── footer.blade.php
│       ├── home/
│       │   └── index.blade.php
│       ├── about/
│       │   └── index.blade.php
│       ├── subsidiaries/
│       │   ├── index.blade.php
│       │   └── show.blade.php
│       ├── sectors/
│       │   └── index.blade.php
│       ├── news/
│       │   ├── index.blade.php
│       │   └── show.blade.php
│       ├── careers/
│       │   └── index.blade.php
│       └── contact/
│           └── index.blade.php
├── routes/
│   └── web.php
├── .env
└── composer.json
```

## Setup Instructions

1. Clone this repository
2. Run `composer install` to install dependencies
3. Copy `.env.example` to `.env` and configure your environment variables
4. Run `php artisan key:generate` to generate an application key
5. Configure your database in the `.env` file
6. Run `php artisan migrate --seed` to create tables and seed data
7. Run `php artisan serve` to start the development server

## Key Technologies

- **Laravel**: PHP framework for web applications
- **Blade**: Template engine for views
- **Eloquent ORM**: Object-Relational Mapping for database interaction
- **Laravel Mix**: Asset compilation
- **Tailwind CSS**: Utility-first CSS framework for styling
- **JavaScript/Alpine.js**: For interactive elements

## Browser Support

The website is designed to work on modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Implementing a dashboard for content management
- Enhanced multilingual support with localization
- Adding more interactive elements and animations
- API integrations

## License

This project is proprietary to BOD Holdings. 