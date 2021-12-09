import React from 'react'
import { useQuery, gql } from '@apollo/client'
import styles from '../../styles/Home.module.css'

const QUERY = gql`
    query Country {
        Country {
            name
            capital
        }
    }
`;

const Countries = () => {
    const { data, loading, error } = useQuery(QUERY);

    if (loading) {
        return <h2>Carregando...</h2>;
    }

    if (error) {
        console.error(error);
        return null;
    }

    const countries = data.Country.slice(10, 20);

    return (
        <>
            <div className={styles.grid}>
                {countries.map((country) => (
                    <div key={country.code} className={styles.card}>
                        <h3>{country.name}</h3>
                        <p>
                            {country.name} - {country.capital}
                        </p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Countries
