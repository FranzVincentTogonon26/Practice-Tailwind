import React from 'react'

function Test() {
  return (
    <>
    <div className='card'>
        <svg class="size-12 shrink-0" viewBox="0 0 40 40"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#2397B3" offset="0%"></stop><stop stop-color="#13577E" offset="100%"></stop></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#73DFF2" offset="0%"></stop><stop stop-color="#47B1EB" offset="100%"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd"><path d="M28.872 22.096c.084.622.128 1.258.128 1.904 0 7.732-6.268 14-14 14-2.176 0-4.236-.496-6.073-1.382l-6.022 2.007c-1.564.521-3.051-.966-2.53-2.53l2.007-6.022A13.944 13.944 0 0 1 1 24c0-7.331 5.635-13.346 12.81-13.95A9.967 9.967 0 0 0 13 14c0 5.523 4.477 10 10 10a9.955 9.955 0 0 0 5.872-1.904z" fill="url(#a)" transform="translate(1 1)"></path><path d="M35.618 20.073l2.007 6.022c.521 1.564-.966 3.051-2.53 2.53l-6.022-2.007A13.944 13.944 0 0 1 23 28c-7.732 0-14-6.268-14-14S15.268 0 23 0s14 6.268 14 14c0 2.176-.496 4.236-1.382 6.073z" fill="url(#b)" transform="translate(1 1)"></path><path d="M18 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM24 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM30 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="#FFF"></path></g></svg>
        <div>
            <h3>ChitChat</h3>
            <p>You have a new message!</p>
        </div>
    </div>

    <div className='profile-card'   >
        <img src="https://tailwindcss.com/_next/static/media/erin-lindford.90b9d461.jpg" alt="" />
        <div className='profile-info' >
            <h3>Erin Lindford</h3>
            <p>Product Engineer</p>
            <button>Message</button>
        </div>
    </div>

    <div className='user'>
        <div class="user-info">
            <h3>Contributors</h3>
            <span>204</span>
        </div>
        <div class="user-images">
            <img class="user-list" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            <img class="user-list" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            <img class="user-list" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
            <img class="user-list" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            <img class="user-list" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
        </div>
        <div className='user-footer'>
            <a href="">198 others</a>
        </div>
    </div>

    <a href="" class="group group-card">
        <div>
            <svg  fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19H6.931A1.922 1.922 0 015 17.087V8h12.069C18.135 8 19 8.857 19 9.913V11"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 7.64L13.042 6c-.36-.616-1.053-1-1.806-1H7.057C5.921 5 5 5.86 5 6.92V11M17 15v4M19 17h-4"></path></svg>
            <h3 >New Project</h3>
        </div>
        <p >
            Create a new project from a variety of starting templates.
        </p>
    </a>


    <div className='grid-card'>
        <span>01</span>
        <span>02</span>
        <span>03</span>
        <span>04</span>
        <span>05</span>
        <span>06</span>
        <span>07</span>
        <span>08</span>
        <span>09</span>
    </div>

    <div className='profile'>
        <img src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80" alt="" />
        <div>
            <strong>Andrew Alfred</strong>
            <span>Technical Advisor</span>
        </div>
    </div>

    <div className='horizontal-list'>
        <div className='profile-list'>
            <img src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80" alt="" />
            <div>
                <strong>Andrew Alfred</strong>
                <span>Technical Advisor</span>
            </div>
        </div>
        <div className='profile-list'>
            <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80" alt="" />
            <div>
                <strong>Debra Houston</strong>
                <span>Analyst</span>
            </div>
        </div>
        <div className='profile-list'>
            <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80" alt="" />
            <div>
                <strong>Jane White</strong>
                <span>Director, Marketing</span>
            </div>
        </div>
        <div className='profile-list'>
            <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80" alt="" />
            <div>
                <strong>Ray Flin</strong>
                <span>Technical Advisor</span>
            </div>
        </div>
    </div>

    <div className='vertical-list'>
       
            <div className='profile-list'>
                <img src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80" alt="" />
                <strong>Andrew</strong>
            </div>
            <div className='profile-list'>
                <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80" alt="" />
                <strong>Debra</strong>
            </div>
            <div className='profile-list'>
                <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80" alt="" />
                <strong>Jane</strong>
            </div>
            <div className='profile-list'>
                <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80" alt="" />
                <strong>Ray</strong>
            </div>
            <div className='profile-list'>
                <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80" alt="" />
                <strong>Debra</strong>
            </div>
            <div className='profile-list'>
                <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80" alt="" />
                <strong>Jane</strong>
            </div>
            <div className='profile-list'>
                <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80" alt="" />
                <strong>Ray</strong>
            </div>
     
    </div>

    </>
  )
}

export default Test