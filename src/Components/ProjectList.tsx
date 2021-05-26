import React from 'react';

const formatDemoLink = (obj: any) => {
  if (obj.has_demo) {
    return <a rel='noopener noreferrer' target='_blank' href={'https://aroniasprenovost.github.io/' + obj.full_name.split('/')[1]} title={'Live demo of ' + obj.name} className='project-link'>Live Demo <i className='fa fa-external-link'></i></a>;
  }
}

const formatTopic = (topic: string) => {

  interface TopicMap {
    [key: string]: string | boolean | number;
  }

  topic = topic.replace(/-/g, '_');
  
  let obj: TopicMap = {
    html: 'HTML', 
    html5: 'HTML5',
    typescript: 'TypeScript',
    javascript: 'JavaScript',
    es6: 'ES6',
    css: 'CSS',
    css3: 'CSS3',
    sass: 'Sass',
    flexbox: 'Flexbox',
    json: 'JSON',
    mysql: 'MySQL',
    nodejs: 'Node',
    webpack: 'Webpack',
    redis: 'Redis',
    react: 'ReactJS',
    reactjs: 'ReactJS',
    html5_canvas: 'HTML5 Canvas',
    socket_io: 'Socket.io',
    rest_api: 'RESTful API',
    restful_api: 'RESTful API',
    crud_api: 'CRUD API',
    docker: 'Docker',
    go: 'Go',
    golang: 'Go',
    gulp: 'Gulp',
    data_structures: 'Data Structures',
    design_patterns: 'Design Patterns',
    factory: 'Factory',
    observer: 'Observer',
    travis_ci: 'Travis CI',
    jest: 'Jest'
  };

  return obj[topic] ? obj[topic] : topic; 
}

const ProjectList = (props:any) => {
  const { repos } = props;
  if (!repos || repos.length === 0) {
    return (
      <p style={{ textAlign: 'center', fontSize: '24px' }}>
          Repositories failed to load.
      </p>
    );
  }; 
  return (
    <main>
      {repos.map((repo:any) => {
        return (
          <div className='project' key={repo.name}>
            {/* <div className='col-image'>
    
            </div> */}
            <div className='col-project'>
              <div className='project-content'>
                <h3>{repo.name}</h3>
                <p>{repo.description}</p>

                <div className='project-skills'>
                  {repo.topics.map((topic: any) => {   
                    return (  
                      <span className='project-skill'>{formatTopic(topic)}</span>            
                    )
                  })}
                </div>
                <div className='project-links'>
                  {formatDemoLink(repo)}
                  <a rel='noopener noreferrer' target='_blank' href={repo.html_url} title={'View source of ' + repo.name} className='project-link secondary'>View Source <i className='fa fa-github'></i></a>
                </div>
              </div> 
            </div>  
          </div>   
        );
      })}
    </main>
  );
};
export default ProjectList;
