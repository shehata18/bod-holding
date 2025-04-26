// Simple script to handle article content loading based on query parameters
document.addEventListener('DOMContentLoaded', function () {
    // Get the article ID from URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');

    // If no specific article ID is provided, we're showing the default article
    if (!articleId) {
        return;
    }

    // Define article data (in a real application, this would come from a database or API)
    const articles = {
        'asap-contract': {
            title: 'ASAP Maintenance Secures Major Contract with Commercial Property Developer',
            date: 'April 10, 2023',
            category: 'Corporate News',
            categoryColor: 'blue-600',
            imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            imageCaption: 'ASAP Maintenance signing ceremony with the commercial property developer',
            author: 'Sarah Johnson',
            authorPosition: 'Director of Operations, ASAP Maintenance',
            authorImageUrl: 'https://randomuser.me/api/portraits/women/32.jpg',
            content: `
                <p>ASAP Maintenance & Operations, a subsidiary of BOD Holdings, has secured a significant three-year maintenance contract with one of the region's leading commercial property developers. The agreement, valued at over $15 million, encompasses comprehensive maintenance services for the developer's portfolio of premium commercial properties across the GCC region.</p>

                <h2>Contract Scope and Details</h2>
                <p>Under the terms of the contract, ASAP Maintenance will provide a wide range of services, including preventive maintenance, emergency repairs, and facility management services. The company will deploy its cutting-edge IoT-based predictive maintenance technology to optimize operational efficiency and minimize downtime across the client's properties.</p>
                
                <p>"This contract represents a major milestone for ASAP Maintenance as we continue to expand our footprint in the commercial property sector," said Mohammed Al-Farsi, CEO of ASAP Maintenance & Operations. "We are proud to partner with such a prestigious developer and look forward to delivering exceptional service that enhances the value and performance of their properties."</p>

                <blockquote>
                    This contract represents a major milestone for ASAP Maintenance as we continue to expand our footprint in the commercial property sector. We are proud to partner with such a prestigious developer and look forward to delivering exceptional service that enhances the value and performance of their properties.
                </blockquote>

                <h2>Technology-Driven Approach</h2>
                <p>ASAP Maintenance's technology-driven approach was a key factor in securing the contract. The company's proprietary maintenance management platform integrates IoT sensors, data analytics, and mobile applications to deliver real-time insights and proactive maintenance solutions.</p>

                <p>The platform enables predictive maintenance by monitoring critical systems and equipment, identifying potential issues before they escalate into costly problems. This approach not only reduces maintenance costs but also extends the lifespan of building systems and improves overall property performance.</p>

                <h3>Key Features of ASAP's Maintenance Solution</h3>
                <ul>
                    <li>Real-time monitoring of building systems and equipment</li>
                    <li>Predictive maintenance algorithms to anticipate potential failures</li>
                    <li>Mobile-enabled technician dispatch and task management</li>
                    <li>Integrated reporting and analytics dashboard</li>
                    <li>Customer portal for transparent communication and service requests</li>
                </ul>

                <h2>Strategic Growth</h2>
                <p>This contract is part of ASAP Maintenance's strategic growth plan, which aims to position the company as the leading provider of technology-enabled maintenance services in the region. The company has been investing heavily in its digital capabilities and workforce development to meet the evolving needs of property owners and managers.</p>

                <p>ASAP Maintenance's parent company, BOD Holdings, has expressed strong support for the subsidiary's growth trajectory. "This contract win demonstrates the strength of ASAP Maintenance's value proposition and reinforces BOD Holdings' commitment to building market-leading businesses across our portfolio," said Ahmed Al-Mansouri, CEO of BOD Holdings.</p>

                <p>The contract is expected to create approximately 50 new jobs within ASAP Maintenance, including technical specialists, project managers, and data analysts. The company has already begun the recruitment process and will also implement a comprehensive training program to ensure service excellence across all client properties.</p>
            `
        },
        'graston-clinic-opening': {
            title: 'Graston Medical Clinics Opens New Facility in Riyadh',
            date: 'March 25, 2023',
            category: 'Healthcare',
            categoryColor: 'green-600',
            imageUrl: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            imageCaption: 'The state-of-the-art Graston Medical Clinic facility in Riyadh',
            author: 'Dr. Fatima Al-Zahrani',
            authorPosition: 'Medical Director, Graston Medical Clinics',
            authorImageUrl: 'https://randomuser.me/api/portraits/women/65.jpg',
            content: `
                <p>Graston Medical Clinics, a subsidiary of BOD Holdings specializing in healthcare services, has expanded its presence in Saudi Arabia with the opening of a new state-of-the-art medical facility in Riyadh. The clinic, located in the prestigious Al Olaya district, represents a significant milestone in the company's expansion strategy across the Kingdom.</p>

                <h2>Advanced Healthcare Facility</h2>
                <p>The new 3,500-square-meter facility features cutting-edge medical technology and specialized departments designed to provide comprehensive healthcare services. The clinic includes departments for general medicine, pediatrics, obstetrics and gynecology, cardiology, orthopedics, dermatology, and a fully-equipped diagnostic center.</p>
                
                <p>"We are excited to bring Graston Medical Clinics' world-class healthcare services to Riyadh," said Dr. Khalid Al-Rasheed, CEO of Graston Medical Clinics. "This new facility enables us to deliver on our commitment to providing accessible, high-quality healthcare to communities across Saudi Arabia."</p>

                <blockquote>
                    We are excited to bring Graston Medical Clinics' world-class healthcare services to Riyadh. This new facility enables us to deliver on our commitment to providing accessible, high-quality healthcare to communities across Saudi Arabia.
                </blockquote>

                <h2>Patient-Centered Approach</h2>
                <p>The Riyadh clinic embodies Graston Medical Clinics' patient-centered approach, featuring spacious waiting areas, private consultation rooms, and a digital patient management system designed to minimize wait times and enhance the overall patient experience.</p>

                <p>The facility has also implemented a comprehensive electronic health record system that enables seamless coordination of care across all Graston Medical Clinics locations. This integration allows patients to access their medical records and receive consistent care regardless of which clinic they visit.</p>

                <h3>Key Features of the New Facility</h3>
                <ul>
                    <li>Advanced diagnostic imaging center with MRI, CT, ultrasound, and X-ray capabilities</li>
                    <li>Fully-equipped laboratory offering a comprehensive range of tests</li>
                    <li>Dedicated women's health center</li>
                    <li>Pediatric unit with child-friendly design and amenities</li>
                    <li>Telemedicine services for remote consultations</li>
                    <li>On-site pharmacy with electronic prescription services</li>
                </ul>

                <h2>Creating Employment Opportunities</h2>
                <p>The new clinic has created over 80 jobs for healthcare professionals and administrative staff, with a focus on hiring and developing local talent. Graston Medical Clinics has partnered with local medical schools and training institutions to provide internship and residency opportunities for Saudi healthcare professionals.</p>

                <p>"We are committed to contributing to Saudi Arabia's healthcare sector not only through providing excellent medical services but also by creating employment opportunities and developing the skills of local healthcare professionals," said Dr. Al-Rasheed.</p>

                <h2>Future Expansion Plans</h2>
                <p>The Riyadh clinic opening is part of Graston Medical Clinics' ambitious expansion plan throughout Saudi Arabia. The company plans to open additional facilities in Jeddah, Dammam, and Medina over the next three years, further extending its reach across the Kingdom.</p>

                <p>Ahmed Al-Mansouri, CEO of BOD Holdings, expressed strong support for Graston Medical Clinics' expansion: "The healthcare sector is a key focus area in our diversification strategy. The successful opening of this new facility in Riyadh demonstrates our commitment to investing in high-quality healthcare services that meet the needs of communities across the region."</p>

                <p>The clinic officially opened its doors to patients on March 20, 2023, with a formal inauguration ceremony attended by healthcare officials, business leaders, and community representatives.</p>
            `
        }
        // Additional articles could be defined here
    };

    // Get the article data
    const article = articles[articleId];

    // If article doesn't exist, return to the news page
    if (!article) {
        window.location.href = 'news.html';
        return;
    }

    // Update page title
    document.title = article.title + ' - BOD Holdings';

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', article.title);
    }

    // Update article content
    document.querySelector('h1').textContent = article.title;
    document.querySelector('.article-content').innerHTML = article.content;

    // Update article metadata
    const categoryElement = document.querySelector('.bg-blue-600.text-white.text-xs.font-semibold.px-4.py-2.rounded-full');
    if (categoryElement) {
        categoryElement.textContent = article.category;
        categoryElement.classList.remove('bg-blue-600');
        categoryElement.classList.add('bg-' + article.categoryColor);
    }

    // Update date
    const dateElement = document.querySelector('.text-gray-500');
    if (dateElement) {
        dateElement.textContent = article.date;
    }

    // Update featured image
    const featuredImage = document.querySelector('figure img');
    const imageCaption = document.querySelector('figcaption');
    if (featuredImage && article.imageUrl) {
        featuredImage.src = article.imageUrl;
        featuredImage.alt = article.title;
    }
    if (imageCaption && article.imageCaption) {
        imageCaption.textContent = article.imageCaption;
    }

    // Update author information
    const authorName = document.querySelector('h3.text-xl.font-bold.text-gray-800.mb-2');
    const authorPosition = document.querySelector('h3.text-xl.font-bold.text-gray-800.mb-2 + p');
    const authorImage = document.querySelector('section.bg-gray-50.py-10.border-t.border-gray-200 img');

    if (authorName && article.author) {
        authorName.textContent = article.author;
    }
    if (authorPosition && article.authorPosition) {
        authorPosition.textContent = article.authorPosition;
    }
    if (authorImage && article.authorImageUrl) {
        authorImage.src = article.authorImageUrl;
        authorImage.alt = article.author;
    }

    // Update breadcrumbs
    const breadcrumb = document.querySelector('[aria-current="page"]');
    if (breadcrumb) {
        breadcrumb.textContent = article.title.length > 30 ? article.title.substring(0, 30) + '...' : article.title;
    }
}); 