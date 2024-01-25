import MapStats from "./worldMap";

export const MainDashboard = () => {

    const userCounts = [
        { country: 'US', count: 100 },
        { country: 'IN', count: 50 },
        { country: 'CA', count: 25 },
    ];

    return (
        <div className="dashboard px-10">
            <div className="stats_count pt-10 ">
                <div className="grid grid-cols-3 gap-4 w-full">
                    {/* Total Appointments Card */}
                    <div className="bg-white rounded-lg shadow-md p-4">
                        <h3 className="text-lg font-medium mb-2">Patients</h3>
                        <p className="text-3xl font-semibold mb-2">7,365<sub className="opacity-50 text-xs"> for today</sub></p>
                    </div>

                    {/* Total Patients Card */}
                    <div className="bg-white rounded-lg shadow-md p-4">
                        <h3 className="text-lg font-medium mb-2">Users</h3>
                        <p className="text-3xl font-semibold mb-2">5,656</p>
                    </div>

                    {/* Total Vacancies Card */}
                    <div className="bg-white rounded-lg shadow-md p-4">
                        <h3 className="text-lg font-medium mb-2">Users Joined in last month</h3>
                        <p className="text-3xl font-semibold mb-2">636</p>
                    </div>
                </div>
            </div>
{/* 
            <MapStats userCounts={userCounts} /> */}
        </div>
    )
}