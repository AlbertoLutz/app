import { ReactElement, useEffect, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { useRouteMatch } from 'react-router-dom';
import { RepositoryItem } from '../../components/RepositoryItem';
import api from '../../services/api';
import { Issues, RepositoryInfo } from './style';

type RepositoryParams = {
    repository: string;
};

interface Repository {
    full_name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
    owner: {
        login: string;
        avatar_url: string;
    };
}

interface Issue {
    title: string;
    id: number;
    html_url: string;
    user: {
        login: string;
    }
}

export function Repository(): ReactElement {
    const [repository, setRepository] = useState<Repository | null>(null);
    const [issues, setIssues] = useState<Issue[]>([]);
    const {params} = useRouteMatch<RepositoryParams>();

  

    useEffect(() => {
        async function loadData(): Promise<void> {
      
            const [repo, issue] = await Promise.all([
                api.get(`/repos/${params.repository}`),
                api.get(`/repos/${params.repository}/issues`),
            ]);

            setRepository(repo.data);
            setIssues(issue.data);
        }
        loadData();
    }, [params.repository]);
    
    return(
       <>
       {repository && (
           <>
           <RepositoryInfo>
               <header>
                   <img 
                   src={repository.owner.avatar_url}
                   alt={repository.owner.login}
                   />
                   <div>
                       <strong>{repository.full_name}</strong>
                       <p>{repository.description}</p>
                   </div>
               </header>
               <ul>
               <RepositoryItem 
               repositoryData={repository.stargazers_count}
               title="Stars"
               />    
                <RepositoryItem 
               repositoryData={repository.forks_count}
               title="Forks"
               /> 
                <RepositoryItem 
               repositoryData={repository.open_issues_count}
               title="Issues abertas"
               />         
               </ul>
           </RepositoryInfo>
           <Issues>
               {issues.map(issue => (
                   <a href={issue.html_url} key={issue.id} target="blank">
                       <div>
                           <strong>{issue.title}</strong>
                           <p>{issue.user.login}</p>
                       </div>
                       <FiChevronRight size={20} />
                   </a>
               ))}
           </Issues>
           </>
       )}
       </>
    );
}