import { easeOut } from "motion";
import { motion } from "motion/react";
import team1 from "../assets/images/team1.jpg";
import team2 from "../assets/images/team2.jpg";
const Banner = () => {
  return (
    <div>
      <div className="hero  min-h-96 w-full">
        <div className="flex justify-center items-center z-0 p-5 w-full gap-10 flex-col lg:flex-row-reverse">
          <div className="flex-1 ml-14">
            <motion.img
              animate={{ y: [0, 50, 0] }}
              transition={{
                duration: 10,
                delay: 2,
                ease: easeOut,
                repeat: Infinity,
              }}
              src={team1}
              className="max-w-sm rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400 w-6/12 shadow-2xl"
            />
            <motion.img
              animate={{ x: [100, 150, 100] }}
              transition={{
                duration: 10,
                delay: 2,
                ease: easeOut,
                repeat: Infinity,
              }}
              src={team2}
              className="max-w-sm rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400 w-5/12 shadow-2xl"
            />
          </div>
          <div className="flex-1">
            <motion.h1
              initial={{ x: 0 }}
              animate={{ x: 50, opacity: 1 }}
              transition={{ duration: 2, delay: 1, ease: easeOut }}
              className="text-5xl font-bold"
            >
              The{" "}
              <motion.span
                animate={{ color: ["#eee75a", "#ee5ac8", "#5aeee7"] }}
                transition={{
                  duration: 10,
                  delay: 1,
                  ease: easeOut,
                  repeat: Infinity,
                }}
              >
                Easiest Way
              </motion.span>{" "}
              to Get Your New Job
            </motion.h1>
            <p className="py-6 ml-10">
              Each month, more than 3 million job seekers turn to website in
              their search for work, making over 140,000 applications every
              single day
            </p>
            <div>
              <div className="join ml-10 w-full" >
                <div>
                  <div>
                    <input
                      className="input input-bordered join-item"
                      placeholder="Search"
                    />
                  </div>
                </div>
                <select className="select select-bordered join-item">
                  <option disabled selected>
                    Filter
                  </option>
                  <option>Sci-fi</option>
                  <option>Drama</option>
                  <option>Action</option>
                </select>
                <div className="indicator">
                  <span className="indicator-item badge badge-secondary">
                    jobs
                  </span>
                  <button className="btn join-item btn-primary">Search</button>
                </div>
              </div>
            </div>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
