
import { getCompetitions } from '../../api/competitions'
import { useEffect, useState } from 'react'

const CompetitionGallery = () => {
    const [competitions, setCompetitions] = useState([])
    const [visibleCount, setVisibleCount] = useState(4)

    useEffect(() => {
        const loadCompetitions = async () => {
            const data = await getCompetitions()
            setCompetitions(data)
        }

        loadCompetitions()
    }, [])

    const handleShowMore = () => {
        setVisibleCount(competitions.length)

    }
    const handleShowLess = () => {
        setVisibleCount(4)
    }

    return (
        <section className="bg-base-100 py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Section Heading */}
                <div className="mx-auto mb-14 max-w-3xl text-center">
                    <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                        <span className="h-2 w-2 rounded-full bg-primary"></span>
                        Our Journey in Action
                    </span>

                    <h2 className="text-3xl font-bold tracking-tight text-base-content sm:text-4xl lg:text-5xl">
                        Competition
                        <span className="text-primary"> Gallery</span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-base-content/70 sm:text-lg">
                        Explore our robotics competitions, creative projects,
                        workshops, and unforgettable moments of innovation.
                    </p>
                </div>

                {/* Competition Image Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {competitions.slice(0, visibleCount).map((competition) => (
                        <article
                            key={competition.id}
                            className="group overflow-hidden rounded-2xl border border-base-300/70 bg-base-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
                        >
                            {/* Image */}
                            <div className="relative aspect-4/3 overflow-hidden">
                                <img
                                    src={competition.image}
                                    alt={competition.alt}
                                    loading="lazy"
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Image Overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-neutral/80 via-transparent to-transparent opacity-80"></div>

                                {/* Year Badge */}
                                <span className="absolute right-3 top-3 rounded-full border border-white/20 bg-neutral/80 px-3 py-1 text-xs font-semibold text-neutral-content backdrop-blur-sm">
                                    {competition.year}
                                </span>

                                {/* Image Bottom Label */}
                                <div className="absolute inset-x-0 bottom-0 p-4">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-primary-content/80">
                                        {competition.event}
                                    </p>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-5">
                                <h3 className="text-lg font-bold text-base-content transition-colors duration-300 group-hover:text-primary">
                                    {competition.title}
                                </h3>

                                <div className="mt-3 flex items-center gap-2 text-sm text-base-content/60">
                                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                                    <span>Robotics Club</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Show More / Show Less Buttons — Design Only */}
                <div className="mt-12 flex flex-wrap justify-center gap-4">
                    {
                        visibleCount < competitions.length && (
                            <button onClick={handleShowMore}
                                type="button"
                                className="btn btn-primary min-w-44 rounded-xl px-7 shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5"
                            >
                                Show More
                                <span aria-hidden="true" className="text-lg">↓</span>
                            </button>
                        )
                    }

                    {
                        visibleCount > 4 && (
                            <button onClick={handleShowLess}
                                type="button"
                                className="btn btn-outline btn-primary min-w-44 rounded-xl px-7 transition-all duration-300 hover:-translate-y-0.5"
                            >
                                Show Less
                                <span aria-hidden="true" className="text-lg">↑</span>
                            </button>
                        )
                    }
                </div>

            </div>
        </section>
    )
}

export default CompetitionGallery
