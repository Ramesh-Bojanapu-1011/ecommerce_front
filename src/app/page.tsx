import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* <Breadcrumbs /> */}
      <div>
        <header className="bg-[#f9f9f9]">
          <div className="flex justify-between items-center p-4 mx-auto max-w-7xl">
            <div>
              <h1 className="">Shop</h1>
            </div>

            <div>
              <header>
                <div>
                  <div className="text-[#333] hover:text-[#666]">
                    <a href="/signin">
                      <button className="bg-black text-[#fff] px-2 py-1">
                        Sign In
                      </button>
                    </a>
                    <a href="/cart">
                      <button className="bg-black text-[#fff] px-2 py-1">
                        Cart
                      </button>
                    </a>
                  </div>
                </div>
              </header>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
