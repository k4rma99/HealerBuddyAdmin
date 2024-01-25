import React, { useState } from 'react';
import { Geographies, Geography } from 'react-simple-maps';
import mapData from "@/assets/countries-110m.json"

interface UserCount {
    country: string;
    count: number;
}

type Props = {
    userCounts: UserCount[];
};

const UserMap: React.FC<Props> = ({ userCounts }) => {
    const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

    const handleMouseEnter = (country: string) => {
        setHoveredCountry(country);
    };

    const handleMouseLeave = () => {
        setHoveredCountry(null);
    };

    return (
        <div className="w-full h-auto">
            <Geographies geography={mapData}>
                {({ geographies }) => ( // Assuming 'geographies' in the return value
                    geographies.map((geo: Geography) => {
                        <Geography
                            key={geo.properties.iso_a2}
                            geography={geo}
                            onMouseEnter={(d: any) => handleMouseEnter(d.properties.iso_a2)}
                            onMouseLeave={handleMouseLeave}
                        />
                    })
                )}
            </Geographies>
        </div>
    );
};

export default UserMap;
