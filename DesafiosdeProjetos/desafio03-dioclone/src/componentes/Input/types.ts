import { ReactElement } from "react"
import { Control } from "react-hook-form"

export interface IInput {
    leftIcon?: ReactElement
    name: string
    placeholder: string
    type?: string
    control: Control
    errorMessage: any | undefined
}
