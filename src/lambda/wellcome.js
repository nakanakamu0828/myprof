exports.handler = function(event, context, callback) {
    callback(null, {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            title: 'なかむ🇭🇰Webデベロッパー',
            subtitle: 'Web Developer, Software Development & Mentor',
            profile_image: 'https://nakamu.life/img/profile.fc674b16.jpg',
            introduction: '香港在住3年目になるWEBエンジニアのなかむです。 現在は、LaravelやRailsを利用したWEB開発を中心にエンジニアをしています。 顧客は全て日本の企業になります。リモート開発にて各企業様の支援を行なっております。',
            categories: [
                'Technology',
                'Web Developer',
                'Software Development',
                'PHPer',
                'Laraveler'
            ],
            skills: [
                'html5-original',
                'css3-original',
                'javascript-original',
                'jquery-original',
                'php-plain',
                'laravel-plain',
                'symfony-original',
                'zend-plain',
                'ruby-plain',
                'rails-plain-wordmark',
                'linux-original',
                'mysql-original',
                'redis-original',
                'nginx-original',
            ],
            works: [
                {
                    image_src: 'https://nakamu.life/img/smail.png',
                    image_alt: 'SMail',
                    title: '✉️一括メール配信サービス',
                    description: 'SESマネージメント企業の営業メール配信システム。クライアントの管理からメールの一斉送信＆予約送信が可能なサービス。<br><br>',
                    skills: [
                        'html5-original',
                        'css3-original',
                        'javascript-original',
                        'jquery-original',
                        'php-plain',
                        'laravel-plain',
                        'mysql-original',
                    ],
                },
                {
                    image_src: 'https://nakamu.life/img/jobsearch.png',
                    image_alt: 'Job Search',
                    title: '求職サイト（転職・派遣）',
                    description: '派遣による就職を目指す方の求職サイト。給与や勤怠までトータルに管理できるWEBサービス<br>飲食、アパレル業種の転職者をターゲットとした転職サイト',
                    skills: [
                        'html5-original',
                        'css3-original',
                        'javascript-original',
                        'jquery-original',
                        'php-plain',
                        'symfony-original',
                        'mysql-original',
                        'redis-original',
                    ],
                }
            ],
            socials: {
                twitter: 'https://twitter.com/nakanakamu0828',
                github: 'https://github.com/nakanakamu0828',
                medium: 'https://medium.com/@nakamu',
                instagram: 'https://instagram.com/____nakamu____',
            },
            contents: [
                {
                    image_src: 'https://nakamu.life/img/nakamu_blog_banner.png',
                    image_alt: 'なかむ🇭🇰エンジニアブログ',
                    title: 'なかむ🇭🇰エンジニアブログ',
                    description: '今ままでのエンジニア経験を元にした技術ブログまとめまています',
                    link: 'https://blog.nakamu.life/',
                },
                {
                    image_src: 'https://nakamu.life/img/nakamulilfe_programming_mentor.png',
                    image_alt: 'Programming Mentor - なかむ',
                    title: 'MENTAを利用してプログラミングメンターをしています',
                    description: 'プログラマーとして一歩成長したい方向けにメンター活動を行なっています。Laravel, Railsを中心としてWEB技術を教えています。',
                    link: 'https://menta.work/plan/124',
                },
            ],
        })
    });
}