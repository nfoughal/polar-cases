import { FC, ReactNode } from "react"

interface authlayoutProps {
    children: ReactNode
}

const AuthLayout: FC<authlayoutProps> = ({ children }) => {
    return (
        <div className="bg-slate-50 flex justify-center items-center min-h-screen">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full sm:w-96">
                {children}
            </div>
        </div>
    )
}

export default AuthLayout