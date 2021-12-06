import { ReactElement } from "react"

type RepositoryProps ={
    repositoryData: number;
    title: string
};


export function RepositoryItem({
    repositoryData, 
    title
}: RepositoryProps): ReactElement {
    return(
        <li>
            <strong>{repositoryData}</strong>
            <span>{title}</span>
        </li>
    )
}