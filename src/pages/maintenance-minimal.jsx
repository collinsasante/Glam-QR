import React from 'react'
import MaintenaceForm from '@/components/authentication/MaintenaceForm'

const MaintenanceMinimal = () => {
    return (
        <main className="auth-minimal-wrapper">
            <div className="auth-minimal-inner">
                <div className="minimal-card-wrapper">
                    <div className="card mb-4 mt-5 mx-4 mx-sm-0 position-relative">
                        <div className="wd-50 bg-white p-2 rounded-circle shadow-lg position-absolute translate-middle top-0 start-50">
                            <img src="/images/logo-abbr.png" alt="img" className="img-fluid" />
                        </div>
                        <div className="card-body p-sm-5">
                            <MaintenaceForm />
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default MaintenanceMinimal