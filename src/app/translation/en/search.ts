import type { NotSearchedService } from '@/features/search'

const services = [
    {
        "title": "ECommerce",
        "description": `
            An efficient and innovative e-commerce platform that will help you increase sales and create your online business. Regardless of the scale of your project, our team of developers will create a user interface, payment system integration, catalog management, analytics, adaptation for all devices, necessary languages and countries, and other important features required for the successful operation of your online store.
            One of the principles of our work is system optimization and freeing up human resources for creativity, management, involvement in processes, and achieving other customer goals. Our team analyzes and offers a maximum number of options for optimizing workflow based on the client's objectives.
        `,
        "id": "ecommerce"
    },
    {
        "title": "Elearning",
        "description": `
            We will help you create online training for your staff and develop a corporate culture in your organization. After studying your goals, we will offer recommendations, proven technologies, and case studies for creating online employee training.
            Your training materials will be interesting and engaging, with a system of gamified testing, fast and systematic feedback on results, a development system, and automatic certification, analytics, and automatic rating building, available on your employee's smartphone. We will also add features to the platform to engage employees in corporate life - news feeds, automated holiday and job change greetings, effectiveness ratings, staff support, and satisfaction level calculation.
        `,
        "id": "elearning"
    },
    {
        "title": "Hr Software",
        "description": `Custom Web Apps Development: Administrative tasks, Service management, Talant management, Labour managemant, Recruitment system`,
        "id": "hr-software"
    },
    {
        "title": "Custom Erp",
        "description": `When developing web applications, the MISEENSCREEN team adheres to the concept of \"company in a smartphone,\" aimed at helping businesses optimize systems and consolidating processes involving multiple departments into a single button.\n\nWe also offer our clients a solution that optimizes subsequent maintenance of the web application and develop key management functions, minimizing the need to involve a programmer for product maintenance.`,
        "id": "custom-erp"
    },
    {
        "title": "Web Portals",
        "description": `Custom Web Apps Development: Self-service portals, Clients portals, Emploee portals, Ecommerce portals, E-learning, Community portals`,
        "id": "web-portals"
    },
    {
        "title": "CRM",
        "description": `Boosting business efficiency, improving customer communication, and increasing sales through CRM systems for your business`,
        "id": "crm"
    }
] satisfies NotSearchedService[]

const translation = {
    "search": {
        "categories": {
            "blogs": "Blogs",
            "services": "Services"
        },
        "empty": "Nothing was found for your request",
        "results": {
            "services": services
        }
    }
}

export default translation