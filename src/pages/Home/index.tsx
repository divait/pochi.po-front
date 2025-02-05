import TokensCarousel from '@/components/TokensCarousel'
import TokensList from '@/components/TokensList'

const Home = () => {
  return (
    <div className="w-full">
      <div className="relative isolate">
        <img src="/banner.png" alt="Banner" className="w-full h-auto" />
        <div className="card absolute left-0 ml-[7%] w-[40%] top-2/5 -translate-y-1/2 p-4 bg-base-100">
          <div className="card-body">
            <h1 className="card-title text-3xl">Welcome to Pochi.po</h1>
            <p className="mt-2 text-lg">Talk to our agent!</p>
            <div className="card-actions ">
              <label className="input input-ghost border border-gray-300">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 18.5A2.493 2.493 0 0 1 7.51 20H7.5a2.468 2.468 0 0 1-2.4-3.154 2.98 2.98 0 0 1-.85-5.274 2.468 2.468 0 0 1 .92-3.182 2.477 2.477 0 0 1 1.876-3.344 2.5 2.5 0 0 1 3.41-1.856A2.5 2.5 0 0 1 12 5.5m0 13v-13m0 13a2.493 2.493 0 0 0 4.49 1.5h.01a2.468 2.468 0 0 0 2.403-3.154 2.98 2.98 0 0 0 .847-5.274 2.468 2.468 0 0 0-.921-3.182 2.477 2.477 0 0 0-1.875-3.344A2.5 2.5 0 0 0 14.5 3 2.5 2.5 0 0 0 12 5.5m-8 5a2.5 2.5 0 0 1 3.48-2.3m-.28 8.551a3 3 0 0 1-2.953-5.185M20 10.5a2.5 2.5 0 0 0-3.481-2.3m.28 8.551a3 3 0 0 0 2.954-5.185"
                  />
                </svg>
                <input type="text" className="grow" placeholder="Want to by some tokens?" />
              </label>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-2xl mx-8 mt-8 mb-4">Pochi Recomended</h2>
      <TokensCarousel />
      <div className="m-8">
        <TokensList />
      </div>
    </div>
  )
}

export default Home