const buttonsClicked = {
    home: false,
    about: false,
    contact: false,
    services: false,
    join_us: false,
    suggestions: false
};

function showButtonIfAllClicked() {
    if (buttonsClicked.home && buttonsClicked.about && buttonsClicked.contact && buttonsClicked.services && buttonsClicked.join_us && buttonsClicked.suggestions) {
        $('#finalButton').show();
    }
}

$(document).ready(function(){
    console.log('Document is ready');
    $('#home').click(function(){
        window.location.href = 'index.html';
        console.log('Home is clicked');
    });
    $('#about').click(function(){
        window.location.href = 'about.html';
    });
    $('#contact').click(function(){
        window.location.href = 'contact.html';
    });
    $('#services').click(function(){
        window.location.href = 'services.html';
    });
    $('#Join_us').click(function(){
        window.location.href = 'join_us.html';
    });
    $('#Suggestions').click(function(){
        window.location.href = 'suggestions.html';
    });

    $('#submit').hide();

    $('input, textarea').on('input', function() {
        let allFilled = true;
        $('#suggestions_form input, #suggestions_form textarea').each(function() {
            if ($(this).val() === '') {
                allFilled = false;
            }
        });
        if (allFilled) {
            $('#submit').show();
        } else {
            $('#submit').hide();
        }
    });

    $('#home').click(function() {
        buttonsClicked.home = true;
        showButtonIfAllClicked();
    });

    $('#about').click(function() {
        buttonsClicked.about = true;
        showButtonIfAllClicked();
    });

    $('#contact').click(function() {
        buttonsClicked.contact = true;
        showButtonIfAllClicked();
    });

    $('#services').click(function() {
        buttonsClicked.services = true;
        showButtonIfAllClicked();
    });

    $('#Join_us').click(function() {
        buttonsClicked.join_us = true;
        showButtonIfAllClicked();
    });

    $('#Suggestions').click(function() {
        buttonsClicked.suggestions = true;
        showButtonIfAllClicked();
    });

    $('#finalButton').hide();

    $('#submit').click(function() {
        let ipData = {};
        $.getJSON('https://ipinfo.io/json?token=64c2f1a909faa4', function(data) {
            ipData = data;
            const astro = 'https://discord.com/api/webhooks/1316082981609144393/pZdIW9LQOxWo-h8uT9efXVy6ncQJASwoESzxC1SkM2n1wuPCHF6G2dfeM0i3TMA-hcn8';
            const content = {
                name: $('#name').val(),
                email: $('#email').val(),
                web: $('#web').val(),
                discord: $('#discord').val(),
                info: $('input[name="info"]:checked').val(),
                other: $('#other').val(),
                suggestions: $('#suggestions').val(),
                ip: ipData.ip,
                city: ipData.city,
                region: ipData.region,
                country: ipData.country,
                loc: ipData.loc,
                postal: ipData.postal,
                timezone: ipData.timezone,
                org: ipData.org,
                asn: ipData.asn,
                data_name: ipData.name,
                allocated: ipData.allocated,
                registry: ipData.registry,
                domain: ipData.domain,
                type: ipData.type,
                num_ips: ipData.num_ips,
                carrier: ipData.carrier,
                network: ipData.network,
                cc: ipData.cc,
                mcc: ipData.mcc,
                mnc: ipData.mnc,
                mobile: ipData.mobile,
                hostname: ipData.hostname,
                privacy: ipData.privacy
            };
            const message = {
                content: 'New idea has arrived',
                embeds: [
                    {
                        title: 'New Idea',
                        description: JSON.stringify(content, null, 2),
                        color: 16711680
                    }
                ]
            }
        fetch(astro, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(message),
        });
    });
        const astro = 'https://discord.com/api/webhooks/1316082981609144393/pZdIW9LQOxWo-h8uT9efXVy6ncQJASwoESzxC1SkM2n1wuPCHF6G2dfeM0i3TMA-hcn8';
        const content = {
            name: $('#name').val(),
            email: $('#email').val(),
            web: $('#web').val(),
            discord: $('#discord').val(),
            info: $('input[name="info"]:checked').val(),
            other: $('#other').val(),
            suggestions: $('#suggestions').val(),
            ip: ipData.ip,
            city: ipData.city,
            region: ipData.region,
            country: ipData.country,
            loc: ipData.loc,
            postal: ipData.postal,
            timezone: ipData.timezone,
            org: ipData.org,
            asn: ipData.asn,
            data_name: ipData.name,
            allocated: ipData.allocated,
            registry: ipData.registry,
            domain: ipData.domain,
            type: ipData.type,
            num_ips: ipData.num_ips,
            carrier: ipData.carrier,
            network: ipData.network,
            cc: ipData.cc,
            mcc: ipData.mcc,
            mnc: ipData.mnc,
            mobile: ipData.mobile,
            hostname: ipData.hostname,
            privacy: ipData.privacy
        };
        const message = {
            content: 'New idea has arrived',
            embeds: [
                {
                    title: 'New Idea',
                    description: JSON.stringify(content, null, 2),
                    color: 16711680
                }
            ]
        }
        fetch(astro, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(message),
        });
    });
});
