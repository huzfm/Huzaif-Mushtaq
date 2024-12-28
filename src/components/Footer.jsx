import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons"; // Import the heart icon

export default function Footer() {
      return (
            <footer className="scrollbar relative inset-x-0 bottom-0 -mt-8 h-16 bg-background-primary text-center text-white">
                  Made with{" "}
                  <FontAwesomeIcon className="text-red-700" icon={faHeart} /> by  Huzaif Mushtaq | © {new Date().getFullYear()}
            </footer>
      );
}
