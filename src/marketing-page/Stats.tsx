import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { stats } from '../utils/constant';

const Stats = () => {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    return (
        <div className="flex justify-center bg-black items-center min-h-screen  text-white px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl w-full py-16 px-8 bg-black border border-gray-800 rounded-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        <h2 className="text-4xl font-bold">
                            Our <span className="text-orange-500">Success</span> Story
                        </h2>
                        <p className="text-white max-w-lg">
                            The journey of digital marketing is like the spread of powerful ideas. Just as ideas inspire and transform, our approach to marketing amplifies your message to reach wider audiences with lasting impact.
                        </p>
                    </div>

                    <div ref={ref}>
                        <div className="grid grid-cols-2 gap-8 text-center">
                            {stats.map((stat, index) => (
                                <div key={index} className="space-y-2">
                                    <div className="text-4xl sm:text-5xl font-bold">
                                        {inView ? (
                                            <CountUp
                                                end={stat.number}
                                                duration={2.5}
                                                separator=","
                                                suffix={stat.suffix}
                                                className="text-orange-500"
                                            />
                                        ) : (
                                            <span className="text-orange-500">0{stat.suffix}</span>
                                        )}
                                    </div>
                                    <p className="text-sm sm:text-base text-white">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;

