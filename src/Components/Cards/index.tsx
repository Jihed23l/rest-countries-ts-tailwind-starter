import {
    Card,
    CardBody,
    Avatar,
    Typography,
  } from "@material-tailwind/react";
  
  interface CountryProps {
    name: {
        common:string,
        official:string
    }
    region: string,
    capital: string[],
    population:number,
    flags:{
        png:string,
        alt:string,
    }
  }
  
  function TeamCard({ name, region,capital,population, flags }: CountryProps) {
    return (
      <Card className="rounded-lg bg-[#FAFAFA]" shadow={false} placeholder="countries">
        <CardBody className="text-center"  placeholder="countries">
          <Avatar
           placeholder="countries"
            src={flags?.png}
            alt={flags?.alt}
            variant="circular"
            size="xxl"
            className="mx-auto mb-6 object-top"
          />
          <Typography placeholder="countries" variant="h5" color="blue-gray" className="!font-medium text-lg">
            {name?.common}
          </Typography>
          <Typography
           placeholder="countries"
            color="blue-gray"
            className="mb-2 !text-base !font-semibold text-gray-600"
          >
            Population: {population}
          </Typography>
          <Typography
           placeholder="countries"
            color="blue-gray"
            className="mb-2 !text-base !font-semibold text-gray-600"
          >
            Region: {region}
          </Typography>
          <Typography
           placeholder="countries"
            color="blue-gray"
            className="mb-2 !text-base !font-semibold text-gray-600"
          >
            capital: {capital[0]}
          </Typography>
         
        </CardBody>
      </Card>
    );
  }
  
  
  export function TeamSection12({content}:{content:CountryProps[]}) {
    return (
      <section className="min-h-screen py-8 px-8 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {content.map((props, key) => (
            <TeamCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
    );
  }
  
  export default TeamSection12;