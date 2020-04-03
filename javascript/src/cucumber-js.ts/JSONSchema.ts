export interface IFeature {
  uri: string
  id: string
  line: number
  keyword: string
  name: string
  description: string
  elements: ReadonlyArray<IElement>
}

export interface IElement {
  line: number
  id: string
  type: 'scenario'
  keyword: string
  name: string
  description: string
  steps: ReadonlyArray<IStep>
}

export interface IStep {
  keyword: string
  line: number
  match?: IMatch
  name: string
  result: IResult
  hidden?: boolean
  arguments?: ReadonlyArray<IDocString | IDataTable>
}

export interface IMatch {
  location: string
}

export interface IResult {
  duration?: number
  status: string
  error_message?: string
}

export interface IDataTable {
  rows: ReadonlyArray<IDataTableRow>
}

export interface IDataTableRow {
  cells: ReadonlyArray<string>
}

export interface IDocString {
  line: number
  content: string
}
