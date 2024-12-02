import React, { lazy, Suspense } from 'react'

const SettingPage = lazy(() => import('./Setting.js'))

const CodeSplitng = () => {

    return (
        <div>
            <h1>Welcome to my App</h1>
            {/* Default content for the homepage */}
            <p>This is Home Page..</p>
            {/* Use Suspense to show a loading spinner while the SettingsPage is loading */}
            <Suspense fallback={<div>Loading Settings ....</div>}>
                <SettingPage />
            </Suspense>

        </div>
    )
}

export default CodeSplitng