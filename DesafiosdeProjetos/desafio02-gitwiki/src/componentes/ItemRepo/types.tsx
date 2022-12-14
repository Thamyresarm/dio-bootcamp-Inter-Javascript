export interface IRepo {
    id: string
    name: string
    full_name: string
    html_url: string
}

export interface IItemRepo {
    repo: IRepo
    handleRemoveRepo: (id: string) => void
}