import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import SignOutButton from './SignOutButton'
import { buttonVariants } from './ui/button'
import { ArrowRight, Smartphone } from 'lucide-react'

const NavBar  = async () => {
  const session = await getServerSession(authOptions);
  let isAdmin = null;

  if (session)
    isAdmin = session.user?.email === process.env.ADMIN_EMAIL;
  console.log("userrrrr", session)
  return (
    <nav className='sticky z-[100] h-14 top-0 w-full bg-white/75 border-b border-gray-200 backdrop-blur-lg transition-all'>
      <MaxWidthWrapper>
          <div className='flex h-14 items-center justify-between '>
              <Link href='/' className='font-semibold'>polar <span className='text-orange-600'>case</span> </Link>
              <div className='h-full flex items-center space-x-4'>
                { session ? (
                  <>
                    <SignOutButton />
                    {isAdmin ? (
                      <Link 
                        href='/dashboard'
                        className={buttonVariants({
                          size: 'sm',
                          variant: 'ghost'
                        })}>
                        Dashboard ✨
                      </Link>
                    ) : null}
                    <Link
                      href='configure/upload'
                      className={buttonVariants({
                        size: 'sm',
                        className : 'hidden sm:flex items-center gap-1' 
                      })}
                      >
                      Create case
                      <ArrowRight className='h-5 w-5 ml-1.5'/>
                    </Link>
                  </>
                ) : (
                  <>
                  <Link
                    href='/signup'
                    className={buttonVariants({
                      variant: 'ghost',
                      size: 'sm',
                    })}
                    >
                    Sign up
                  </Link>

                  <Link
                    href='/signin'
                    className={buttonVariants({
                      variant: 'ghost',
                      size: 'sm',
                    })}
                    >
                    login
                  </Link>

                  <div className='h-8 w-px bg-zinc-200 hidden sm:block' />

                  <Link
                      href='configure/upload'
                      className={buttonVariants({
                        size: 'sm',
                        className : 'hidden sm:flex items-center gap-1' 
                      })}
                      >
                      Create case
                      <ArrowRight className='h-5 w-5 ml-1.5'/>
                    </Link>
                  </>
                )
              }
              </div>
          </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default NavBar