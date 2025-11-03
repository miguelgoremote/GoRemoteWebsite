export type Language = 'en' | 'de';

export interface Translations {
  nav: {
    home: string;
    services: string;
    about: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  services: {
    title: string;
    subtitle: string;
    channel: {
      title: string;
      description: string;
      details: string;
    };
    strategy: {
      title: string;
      description: string;
      details: string;
    };
    optimization: {
      title: string;
      description: string;
      details: string;
    };
    training: {
      title: string;
      description: string;
      details: string;
    };
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
  };
  contact: {
    title: string;
    subtitle: string;
    address: string;
    addressLine1: string;
    addressLine2: string;
    addressLine3: string;
    getInTouch: string;
    email: string;
  };
  stats: {
    clients: string;
    experience: string;
    success: string;
    projects: string;
    clientsValue: string;
    experienceValue: string;
    successValue: string;
    projectsValue: string;
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
  footer: {
    rights: string;
    tagline: string;
    quickLinks: string;
    services: string;
    company: string;
    legal: string;
    imprint: string;
    privacy: string;
    terms: string;
    disclaimer: string;
  };
  cookieBanner: {
    title: string;
    description: string;
    accept: string;
    decline: string;
    learnMore: string;
  };
  legal: {
    lastUpdated: string;
    imprint: {
      title: string;
      companyInfo: string;
      address: string;
      contact: string;
      managingDirector: string;
      register: string;
      vat: string;
      responsible: string;
    };
    privacy: {
      title: string;
      intro: string;
      dataCollection: string;
      dataUsage: string;
      cookies: string;
      thirdParty: string;
      security: string;
      rights: string;
      changes: string;
      contactData: string;
    };
    terms: {
      title: string;
      intro: string;
      services: string;
      obligations: string;
      payment: string;
      liability: string;
      intellectual: string;
      termination: string;
      governing: string;
      changesTerms: string;
      contact: string;
    };
    disclaimer: {
      title: string;
      liability: string;
      content: string;
      links: string;
      copyright: string;
    };
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      title: 'Optimize Your Sales Channels, Maximize Your Growth',
      subtitle: 'Professional B2B consulting services to help businesses optimize sales channels and develop winning sales strategies',
      cta: 'Get Started',
    },
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive consulting solutions for your sales optimization needs',
      channel: {
        title: 'Sales Channel Optimization',
        description: 'Analyze and optimize your existing sales channels to maximize efficiency and revenue potential.',
        details: 'We conduct comprehensive audits of your current sales infrastructure, identify inefficiencies, and implement data-driven optimizations that directly impact your bottom line.',
      },
      strategy: {
        title: 'Strategic Sales Development',
        description: 'Develop data-driven sales strategies tailored to your business goals and market position.',
        details: 'Our strategic planning process involves market analysis, competitor research, and custom strategy development aligned with your unique business objectives.',
      },
      optimization: {
        title: 'Performance Optimization',
        description: 'Identify bottlenecks and implement solutions to improve your sales team\'s performance.',
        details: 'Through advanced analytics and process mapping, we uncover performance barriers and deliver actionable solutions that enhance productivity and results.',
      },
      training: {
        title: 'Sales Training & Coaching',
        description: 'Train your team with proven methodologies and best practices for sustainable growth.',
        details: 'Our training programs combine industry best practices with hands-on coaching to ensure your team achieves and maintains peak performance levels.',
      },
    },
    about: {
      title: 'About GoRemote LLC',
      subtitle: 'Your Trusted Partner in Sales Excellence',
      description: 'GoRemote LLC specializes in B2B consulting services, helping businesses optimize their sales channels and develop strategic approaches to sales. Based in Albuquerque, New Mexico, we work with companies across America to transform their sales operations and drive measurable results.',
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Ready to optimize your sales channels? Let\'s talk.',
      address: 'Address',
      addressLine1: '1209 Mountain Road Pl NE, Suite R',
      addressLine2: 'Albuquerque, NM 87110',
      addressLine3: 'USA',
      getInTouch: 'Contact Us',
      email: 'info@goremote.com',
    },
    stats: {
      clients: 'Satisfied Clients',
      experience: 'Years of Experience',
      success: 'Success Rate',
      projects: 'Completed Projects',
      clientsValue: '500+',
      experienceValue: '10+',
      successValue: '95%',
      projectsValue: '1000+',
    },
    cta: {
      title: 'Ready to Transform Your Sales Operations?',
      subtitle: 'Partner with GoRemote LLC and accelerate your business growth through proven sales optimization strategies.',
      button: 'Schedule Consultation',
    },
    footer: {
      rights: 'All rights reserved.',
      tagline: 'Optimizing Sales Channels for Success',
      quickLinks: 'Quick Links',
      services: 'Services',
      company: 'Company',
      legal: 'Legal',
      imprint: 'Imprint',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      disclaimer: 'Disclaimer',
    },
    cookieBanner: {
      title: 'Cookie Preferences',
      description: 'We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. By clicking "Accept", you consent to our use of cookies.',
      accept: 'Accept All',
      decline: 'Decline',
      learnMore: 'Learn more about our Privacy Policy',
    },
    legal: {
      lastUpdated: 'Last updated:',
      imprint: {
        title: 'Imprint',
        companyInfo: 'Company Information',
        address: 'Address',
        contact: 'Contact',
        managingDirector: 'Managing Director',
        register: 'Commercial Register',
        vat: 'VAT ID',
        responsible: 'Responsible for Content',
      },
      privacy: {
        title: 'Privacy Policy',
        intro: 'GoRemote LLC respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information.',
        dataCollection: 'Data Collection: We collect information you provide directly to us, such as when you contact us via email or through our website contact forms.',
        dataUsage: 'Use of Data: We use collected data to provide our consulting services, respond to inquiries, and improve our services.',
        cookies: 'Cookies: Our website may use cookies to enhance user experience. You can control cookies through your browser settings.',
        thirdParty: 'Third-Party Services: We do not sell your personal data to third parties. We may use third-party service providers to help operate our website.',
        security: 'Data Security: We implement appropriate security measures to protect your personal information against unauthorized access.',
        rights: 'Your Rights: You have the right to access, correct, or delete your personal data. Contact us at info@goremote.com for such requests.',
        changes: 'Changes: We may update this privacy policy from time to time. Please review this page periodically for updates.',
        contactData: 'Contact for Privacy Matters: For questions about this privacy policy, contact us at info@goremote.com',
      },
      terms: {
        title: 'Terms of Service',
        intro: 'These Terms of Service govern your use of GoRemote LLC consulting services.',
        services: 'Services: GoRemote LLC provides B2B consulting services related to sales channel optimization and sales strategy development.',
        obligations: 'Client Obligations: Clients must provide accurate information and cooperate in the consulting process.',
        payment: 'Payment: Payment terms will be specified in individual service agreements.',
        liability: 'Liability: GoRemote LLC provides consulting services with professional diligence. Liability is limited to the extent permitted by law.',
        intellectual: 'Intellectual Property: All materials, strategies, and recommendations provided remain the property of GoRemote LLC unless otherwise agreed.',
        termination: 'Termination: Either party may terminate services with appropriate notice as specified in the service agreement.',
        governing: 'Governing Law: These terms are governed by the laws of New Mexico, United States.',
        changesTerms: 'Changes: GoRemote LLC reserves the right to modify these terms. Clients will be notified of significant changes.',
        contact: 'Contact: For questions about these terms, contact us at info@goremote.com',
      },
      disclaimer: {
        title: 'Disclaimer',
        liability: 'Liability for Content: While we strive for accuracy, GoRemote LLC assumes no liability for the completeness or accuracy of information provided on this website.',
        content: 'Content: The content on this website is for informational purposes only and does not constitute professional advice unless explicitly stated.',
        links: 'External Links: Our website may contain links to external websites. We are not responsible for the content of external sites.',
        copyright: 'Copyright: All content on this website is protected by copyright. Reproduction requires prior written consent.',
      },
    },
  },
  de: {
    nav: {
      home: 'Startseite',
      services: 'Leistungen',
      about: 'Über uns',
      contact: 'Kontakt',
    },
    hero: {
      title: 'Optimieren Sie Ihre Vertriebskanäle, Maximieren Sie Ihr Wachstum',
      subtitle: 'Professionelle B2B-Beratungsdienstleistungen zur Optimierung von Vertriebskanälen und Entwicklung erfolgreicher Vertriebsstrategien',
      cta: 'Jetzt starten',
    },
    services: {
      title: 'Unsere Leistungen',
      subtitle: 'Umfassende Beratungslösungen für Ihre Vertriebsoptimierung',
      channel: {
        title: 'Vertriebskanal-Optimierung',
        description: 'Analysieren und optimieren Sie Ihre bestehenden Vertriebskanäle, um Effizienz und Umsatzpotenzial zu maximieren.',
        details: 'Wir führen umfassende Audits Ihrer aktuellen Vertriebsinfrastruktur durch, identifizieren Ineffizienzen und implementieren datengetriebene Optimierungen, die sich direkt auf Ihr Endergebnis auswirken.',
      },
      strategy: {
        title: 'Strategische Vertriebsentwicklung',
        description: 'Entwickeln Sie datengetriebene Vertriebsstrategien, die auf Ihre Geschäftsziele und Marktposition zugeschnitten sind.',
        details: 'Unser strategischer Planungsprozess umfasst Marktanalyse, Wettbewerbsforschung und die Entwicklung individueller Strategien, die auf Ihre einzigartigen Geschäftsziele ausgerichtet sind.',
      },
      optimization: {
        title: 'Leistungsoptimierung',
        description: 'Identifizieren Sie Engpässe und setzen Sie Lösungen um, um die Leistung Ihres Vertriebsteams zu verbessern.',
        details: 'Durch fortgeschrittene Analysen und Prozessmapping decken wir Leistungsbarrieren auf und liefern umsetzbare Lösungen, die Produktivität und Ergebnisse steigern.',
      },
      training: {
        title: 'Vertriebsschulung & Coaching',
        description: 'Schulen Sie Ihr Team mit bewährten Methoden und Best Practices für nachhaltiges Wachstum.',
        details: 'Unsere Schulungsprogramme kombinieren Branchenbest Practices mit praktischem Coaching, um sicherzustellen, dass Ihr Team Spitzenleistungen erzielt und aufrechterhält.',
      },
    },
    about: {
      title: 'Über GoRemote LLC',
      subtitle: 'Ihr vertrauensvoller Partner für Vertriebsexzellenz',
      description: 'GoRemote LLC spezialisiert sich auf B2B-Beratungsdienstleistungen und hilft Unternehmen, ihre Vertriebskanäle zu optimieren und strategische Vertriebsansätze zu entwickeln. Mit Sitz in Albuquerque, New Mexico, arbeiten wir mit Unternehmen in ganz Amerika zusammen, um deren Vertriebsprozesse zu transformieren und messbare Ergebnisse zu erzielen.',
    },
    contact: {
      title: 'Kontakt',
      subtitle: 'Bereit, Ihre Vertriebskanäle zu optimieren? Lassen Sie uns reden.',
      address: 'Adresse',
      addressLine1: '1209 Mountain Road Pl NE, Suite R',
      addressLine2: 'Albuquerque, NM 87110',
      addressLine3: 'USA',
      getInTouch: 'Kontaktieren Sie uns',
      email: 'info@goremote.com',
    },
    stats: {
      clients: 'Zufriedene Kunden',
      experience: 'Jahre Erfahrung',
      success: 'Erfolgsquote',
      projects: 'Abgeschlossene Projekte',
      clientsValue: '500+',
      experienceValue: '10+',
      successValue: '95%',
      projectsValue: '1000+',
    },
    cta: {
      title: 'Bereit, Ihre Vertriebsprozesse zu transformieren?',
      subtitle: 'Partnern Sie mit GoRemote LLC und beschleunigen Sie Ihr Geschäftswachstum durch bewährte Vertriebsoptimierungsstrategien.',
      button: 'Beratung vereinbaren',
    },
    footer: {
      rights: 'Alle Rechte vorbehalten.',
      tagline: 'Vertriebskanäle für Erfolg optimieren',
      quickLinks: 'Schnelllinks',
      services: 'Leistungen',
      company: 'Unternehmen',
      legal: 'Rechtliches',
      imprint: 'Impressum',
      privacy: 'Datenschutz',
      terms: 'AGB',
      disclaimer: 'Haftungsausschluss',
    },
    cookieBanner: {
      title: 'Cookie-Einstellungen',
      description: 'Wir verwenden Cookies, um Ihr Browsing-Erlebnis zu verbessern, den Website-Verkehr zu analysieren und Inhalte zu personalisieren. Durch Klicken auf "Akzeptieren" stimmen Sie der Verwendung von Cookies zu.',
      accept: 'Alle akzeptieren',
      decline: 'Ablehnen',
      learnMore: 'Mehr über unsere Datenschutzerklärung erfahren',
    },
    legal: {
      lastUpdated: 'Zuletzt aktualisiert:',
      imprint: {
        title: 'Impressum',
        companyInfo: 'Firmenangaben',
        address: 'Adresse',
        contact: 'Kontakt',
        managingDirector: 'Geschäftsführer',
        register: 'Handelsregister',
        vat: 'Umsatzsteuer-ID',
        responsible: 'Verantwortlich für Inhalte',
      },
      privacy: {
        title: 'Datenschutzerklärung',
        intro: 'GoRemote LLC respektiert Ihre Privatsphäre und ist bestrebt, Ihre persönlichen Daten zu schützen. Diese Datenschutzerklärung erläutert, wie wir Ihre Informationen sammeln, verwenden und schützen.',
        dataCollection: 'Datenerfassung: Wir erfassen Informationen, die Sie uns direkt zur Verfügung stellen, z.B. wenn Sie uns per E-Mail oder über Kontaktformulare auf unserer Website kontaktieren.',
        dataUsage: 'Nutzung der Daten: Wir verwenden die erfassten Daten, um unsere Beratungsdienstleistungen anzubieten, auf Anfragen zu reagieren und unsere Dienstleistungen zu verbessern.',
        cookies: 'Cookies: Unsere Website kann Cookies verwenden, um die Benutzererfahrung zu verbessern. Sie können Cookies über Ihre Browsereinstellungen steuern.',
        thirdParty: 'Dienstleister Dritter: Wir verkaufen Ihre persönlichen Daten nicht an Dritte. Wir können Drittanbieter nutzen, um unseren Betrieb zu unterstützen.',
        security: 'Datensicherheit: Wir setzen angemessene Sicherheitsmaßnahmen ein, um Ihre persönlichen Informationen vor unbefugtem Zugriff zu schützen.',
        rights: 'Ihre Rechte: Sie haben das Recht, auf Ihre persönlichen Daten zuzugreifen, sie zu korrigieren oder zu löschen. Kontaktieren Sie uns unter info@goremote.com für solche Anfragen.',
        changes: 'Änderungen: Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Bitte überprüfen Sie diese Seite regelmäßig auf Updates.',
        contactData: 'Kontakt für Datenschutzangelegenheiten: Bei Fragen zu dieser Datenschutzerklärung kontaktieren Sie uns unter info@goremote.com',
      },
      terms: {
        title: 'Allgemeine Geschäftsbedingungen',
        intro: 'Diese Allgemeinen Geschäftsbedingungen regeln Ihre Nutzung der Beratungsdienstleistungen von GoRemote LLC.',
        services: 'Leistungen: GoRemote LLC bietet B2B-Beratungsdienstleistungen zur Vertriebskanal-Optimierung und Vertriebsstrategieentwicklung an.',
        obligations: 'Kundenpflichten: Kunden müssen genaue Informationen bereitstellen und im Beratungsprozess kooperieren.',
        payment: 'Zahlung: Zahlungsbedingungen werden in individuellen Servicevereinbarungen festgelegt.',
        liability: 'Haftung: GoRemote LLC erbringt Beratungsdienstleistungen mit beruflicher Sorgfalt. Die Haftung ist auf das gesetzlich zulässige Maß beschränkt.',
        intellectual: 'Geistiges Eigentum: Alle bereitgestellten Materialien, Strategien und Empfehlungen bleiben Eigentum von GoRemote LLC, sofern nicht anders vereinbart.',
        termination: 'Kündigung: Jede Partei kann die Dienstleistungen mit angemessener Kündigungsfrist kündigen, wie in der Servicevereinbarung festgelegt.',
        governing: 'Anwendbares Recht: Diese Bedingungen unterliegen den Gesetzen von New Mexico, Vereinigte Staaten.',
        changesTerms: 'Änderungen: GoRemote LLC behält sich das Recht vor, diese Bedingungen zu ändern. Kunden werden über wesentliche Änderungen informiert.',
        contact: 'Kontakt: Bei Fragen zu diesen Bedingungen kontaktieren Sie uns unter info@goremote.com',
      },
      disclaimer: {
        title: 'Haftungsausschluss',
        liability: 'Haftung für Inhalte: Obwohl wir uns um Genauigkeit bemühen, übernimmt GoRemote LLC keine Haftung für die Vollständigkeit oder Genauigkeit der auf dieser Website bereitgestellten Informationen.',
        content: 'Inhalte: Die Inhalte auf dieser Website dienen nur zu Informationszwecken und stellen keine professionelle Beratung dar, es sei denn, dies wird ausdrücklich angegeben.',
        links: 'Externe Links: Unsere Website kann Links zu externen Websites enthalten. Wir sind nicht verantwortlich für den Inhalt externer Websites.',
        copyright: 'Urheberrecht: Alle Inhalte auf dieser Website sind urheberrechtlich geschützt. Die Vervielfältigung erfordert eine vorherige schriftliche Zustimmung.',
      },
    },
  },
};

