export default {
  widgets: [
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
                  buildHookId: '61082d4af1ddb0483c6211d2',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-o85k9821',
                  apiId: 'd9be861b-4902-4cbb-b065-6dd4762ff388'
                },
                {
                  buildHookId: '61082d4a7471eb146d0e11bb',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-ubqbxzey',
                  apiId: '929bbfaf-e86c-4848-b8be-65f8b8679342'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cocktailscooking/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-ubqbxzey.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
