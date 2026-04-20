function About () {
    return(
        <>
        <div className="pattern flex flex-col my-15 w-[90%] mx-auto md:flex-row md:gap-30 md:w-[80%]">
        <div className="md:w-1/2">
        <h1 className="text-4xl text-center font-bold md:text-left">What's different about Manage?</h1>
        <p className="text-gray-400 text-center my-6 md:text-left">Manage provides all teh functionality your team needs,
        without the complexity. Our software is tailor-made for
        modern digital product teams.</p>
        </div>
        <div className="md:w-1/2"> 
        <div className="flex flex-row gap-2 items-center bg-rose-50 rounded-l-4xl my-6 md:bg-transparent md:my-1 md:gap-5">
        <h2 className="bg-orange-400 rounded-4xl text-white px-7 py-2">01</h2>
        <h2>Track company-wide progress</h2>
        </div>
        <p className="text-gray-400 text-left md:ml-24">See how your day-to-day tasks fit into the wider vision. Go
        from tracking progress at the smallest of details. Never lose
        sight of the bigger picture again.</p>
        <div className="flex flex-row gap-2 items-center bg-rose-50 rounded-l-4xl my-6 md:bg-transparent md:gap-5 md:my-1">
        <h2 className="bg-orange-400 rounded-4xl text-white px-7 py-2">02</h2>
        <h2>Advanced built-in reports</h2>
        </div>
        <p className="text-gray-400 text-left md:ml-24">Set internal delivery estimates and track progress toward company goals.
        Our customisable dashboard helps you build out the reports you
        need to keep key stakeholders informed.</p>
        <div className="flex flex-row gap-2 items-center bg-rose-50 rounded-l-4xl my-6 md:bg-transparent md:gap-5 md:my-1">
        <h2 className="bg-orange-400 rounded-4xl text-white px-7 py-2">03</h2>
        <h2>Everything you need in one place</h2>
        </div>
        <p className="text-gray-400 text-left md:ml-24">Stop jumpong from one service to another to communicate, 
        store files, track tasks and share documents. Manage offers an 
        all-in-one team productivity solution.</p>
        </div>
        </div>
        </>
    )
}

export default About