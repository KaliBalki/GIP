import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

interface TeamCardProps {
  teamName: string;
  foundationYear: string;
  captain: string;
  titles: string;
}

const TeamCard: React.FC<TeamCardProps> = ({
  teamName,
  foundationYear,
  captain,
  titles,
}) => {
  return (
    <div className=" p-[3px] rounded-3xl w-fit">
      {/* Inner card with content */}
      <div className="bg-[#161616] w-[350px] h-auto shadow-lg rounded-3xl flex flex-col p-10">
        {/* Flex container for the logo and text */}
        <div className="flex flex-row items-center mb-6">
          {/* Team Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/NoBG_White.png"
              width="80"
              height="80"
              alt="Team Logo"
              className="rounded-lg"
            />
          </div>

          {/* Team Details */}
          <div className="ml-6 text-white">
            <h2 className="text-4xl font-bold">{teamName}</h2>
            <p className="text-lg">Foundation {foundationYear}</p>
          </div>
        </div>

        {/* Additional Team Info */}
        <div className="text-white mb-6">
          <p className="text-lg">
            <strong>Captain:</strong> {captain}
          </p>
          <p className="text-lg">
            <strong>Titles:</strong> {titles}
          </p>
          <p className="text-lg">
            <strong>Budget:</strong> 5$
          </p>
        </div>

        {/* Star Rating */}
        <div className="mt-auto">
          <div className="flex flex-row justify-center mb-4 space-x-4">
            <FontAwesomeIcon
              icon={faStar}
              size="2x"
              style={{ color: "#FFD43B" }}
            />
            <FontAwesomeIcon
              icon={faStar}
              size="2x"
              style={{ color: "#FFD43B" }}
            />
            <FontAwesomeIcon
              icon={faStar}
              size="2x"
              style={{ color: "#FFD43B" }}
            />
            <FontAwesomeIcon
              icon={faStar}
              size="2x"
              style={{ color: "#FFD43B" }}
            />
            <FontAwesomeIcon
              icon={faStar}
              size="2x"
              style={{ color: "#FFD43B" }}
            />
          </div>
          <Link href="/Team">
            <button className="bg-white text-black font-bold py-3 px-6 rounded-lg w-full transition-colors border-2 hover:bg-transparent hover:text-white duration-300">
              SEE CLUB DETAILS &gt;
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
