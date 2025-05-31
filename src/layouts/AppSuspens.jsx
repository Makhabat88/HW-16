import { Suspense } from "react"
import { AppSpinner } from "../components/UI/AppSpinner"

const AppSuspens = ({children}) => {
    return <Suspense fallback={<AppSpinner/>}>
        {children}
    </Suspense>
}
export default AppSuspens;
