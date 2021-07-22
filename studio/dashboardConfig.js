export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60f9f89fe696bb335af73c60',
                  title: 'Sanity Studio',
                  name: 'sg-portfolio-studio',
                  apiId: '41184d94-4356-4395-b326-c5f6be64560a'
                },
                {
                  buildHookId: '60f9f89f448dbc30c8778de6',
                  title: 'Portfolio Website',
                  name: 'sg-portfolio-web',
                  apiId: '3c761d14-7c3f-4310-bc07-b5a6e87fb544'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Evan2260/sg-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sg-portfolio-web.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
