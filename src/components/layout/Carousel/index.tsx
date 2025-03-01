import React, { useMemo } from 'react';
import Track from './components/Track';
import Image from 'next/image';

const LOGOS = [
  { src: '/logos/postgres-square.png', alt: 'Postgres Logo', href: 'https://camelai.com/postgres' },
  { src: '/logos/duckdb-square.png', alt: 'DuckDB Logo' },
  { src: '/logos/peliqan-square.png', alt: 'Peliqan Logo', href: 'https://camelai.com/blog/peliqan_data_warehouse/' },
  { src: '/logos/linkedin-square.png', alt: 'LinkedIn Logo' },
  { src: '/logos/airtable-square.png', alt: 'Airtable Logo' },
  { src: '/logos/snowflake-square.png', alt: 'Snowflake Logo' },
  { src: '/logos/dynmodb-square.png', alt: 'DynamoDB Logo' },
  { src: '/logos/csv-square.png', alt: 'CSV Logo', href: '/csv' },
  { src: '/logos/sqlite-square.png', alt: 'SQLite Logo', href: 'https://camelai.com/sqlite' },
  { src: '/logos/bigquery-square.png', alt: 'BigQuery Logo', href: 'https://camelai.com/bigquery' },
  { src: '/logos/mongodb-square.png', alt: 'MongoDB Logo', href: 'https://camelai.com/mongodb' },
  { src: '/logos/motherduck-square.png', alt: 'Motherduck Logo', href: 'https://camelai.com/motherduck' },
  { src: '/logos/clickhouse-square.png', alt: 'ClickHouse Logo', href: 'https://camelai.com/clickhouse' },
  { src: '/logos/excel-square.png', alt: 'Excel Logo', href: 'https://camelai.com/excel' },
  { src: '/logos/mysql-square.png', alt: 'MySQL Logo', href: 'https://camelai.com/mysql' },
  { src: '/logos/supabase-square.png', alt: 'Supabase Logo', href: 'https://camelai.com/supabase' },
  { src: '/logos/sheets-square.png', alt: 'Sheets Logo' },
  { src: '/logos/salesforce-square.png', alt: 'Salesforce Logo' }
];

const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const Carousel = () => {
  // Create two different random orders of logos
  const randomizedLogos1 = useMemo(() => shuffleArray(LOGOS), []);
  const randomizedLogos2 = useMemo(() => shuffleArray(LOGOS), []);

  return (
    <section className="relative w-full overflow-hidden bg-light-background">
      {/* Background Image */}
      <div className="relative z-10 max-w-[1340px] mx-auto">
        <div className="absolute inset-0">
          <Image
            src="/backshape.webp"
            alt="Background Pattern"
            fill
            className="object-cover opacity-80"
          />
        </div>

        {/* Carousel Content */}
        <div className="relative overflow-hidden">
          <div className="flex flex-col gap-4 py-8 bg-gradient-to-b from-transparent to-light-background/10">
            {/* Fade overlays */}
            <div className="absolute left-0 top-0 w-[200px] h-full z-10 bg-gradient-to-r from-light-background via-light-background/80 to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 w-[200px] h-full z-10 bg-gradient-to-l from-light-background via-light-background/80 to-transparent pointer-events-none" />

            {/* Tracks */}
            <div className="relative mb-1">
              <Track logos={randomizedLogos1} direction="left" />
            </div>
            <div className="relative">
              <Track logos={randomizedLogos2} direction="right" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;


