/* import type { ComponentProps } from 'react'

import { Input as InputMui } from '@base-ui-components/react'
 */
/* type InputMuiProps = ComponentProps<typeof InputMui> & {
  label?: string
} */

export const Input = () => {
  //const { label, name, defaultValue, className, ...rest } = props

  // <>
  //   {label && <label htmlFor="name">${label}</label>}
  // </>
  return (
    <Input name={'teste'} defaultValue={'teste'} className={'tetse'} required />
  )
}
