import Image from 'next/image'
import { getZeroDevSigner, getPrivateKeyOwner } from '@zerodevapp/sdk'
import { ethers } from "ethers";;

export default function Home() {

    //https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions
    async function signup(data: FormData) {
        'use server'
     
        console.log("Full Name: " + data.get("fullname"));
        console.log("Email: " + data.get("email"));
        console.log("Password: " + data.get("password"));
        console.log("Conform Password: " + data.get("confirm_password"));
        
        const randomwallet = ethers.Wallet.createRandom();
        console.log('address:', randomwallet.address);
        console.log('mnemonic:', randomwallet.mnemonic.phrase);
        console.log('privateKey:', randomwallet.privateKey);
        
        const signer = await getZeroDevSigner({
            projectId: "my_zero_dev_project_id",
            owner: getPrivateKeyOwner(randomwallet.privateKey),
          })
          let aaWallet = await signer.getAddress();
          console.log("Account Abstraction Wallet: " + aaWallet);
        // Now we can store all the data in the database
      }


  return (
        <div className="bg-grey-lighter min-h-screen flex flex-col">
                    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                            <form action={signup}>
                            <input 
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="fullname"
                                placeholder="Full Name" />

                            <input 
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="email"
                                placeholder="Email" />

                            <input 
                                type="password"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="password"
                                placeholder="Password" />
                            <input 
                                type="password"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="confirm_password"
                                placeholder="Confirm Password" />

                            <button
                                type="submit"
                                className="w-full text-center py-3 rounded text-white bg-blue-700 hover:bg-blue-800 focus:outline-none my-1"
                            >Create Account</button>
                            </form>
                            <div className="text-center text-sm text-grey-dark mt-4">
                                By signing up, you agree to the 
                                <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                    Terms of Service
                                </a> and 
                                <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                    Privacy Policy
                                </a>
                            </div>
                        </div>

                        <div className="text-grey-dark mt-6">
                            Already have an account? 
                            <a className="no-underline border-b border-blue text-blue" href="../login/">
                                Log in
                            </a>.
                        </div>
                    </div>
                </div>
        )
}
