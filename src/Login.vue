<template>
	<div class="bg-black">
		<header id="header" class="sticky top-0 z-20">
			<div class="border-t-2 border-transparent w-full bg-black shadow-sm">
				<div
						class="
									 max-w-screen-xl
									 mx-auto
									 flex flex-wrap
									 justify-between
									 px-1
									 text-sm
									 h-16
									 items-center
									 "
						>
						<div class="px-2 md:px-6 lg:pr-8 flex flex-wrap">
							<a class="flex items-center hover:text-gray-300 text-white">
								<span></span>
							</a>
						</div>
						<div class="flex flex-wrap items-center">
							<a
									class="
												 hidden
												 md:flex
												 items-center
												 mr-2
												 justify-center
												 px-4
												 py-2
												 border border-transparent
												 leading-6
												 font-medium
												 rounded
												 text-white
												 bg-transparent
												 border border-white border-opacity-60
												 focus:outline-none
												 "
									>
									Sign Up
							</a>
								<a
										class="
													 hidden
													 md:flex
													 items-center
													 mr-2
													 justify-center
													 px-4
													 py-2
													 border border-transparent
													 leading-6
													 font-medium
													 rounded
													 text-white
													 bg-transparent
													 border border-white border-opacity-60
													 focus:outline-none
													 "
										>
										Log In
								</a>
						</div>
				</div>
			</div>
		</header>
		<div
				class="
							 min-h-screen
							 flex flex-col
							 sm:justify-center
							 items-center
							 pt-6
							 sm:pt-0
							 bg-black
							 "
				>
				<div
						class="
									 w-full
									 sm:max-w-md
									 mt-6
									 px-6
									 py-4
									 bg-gray-900
									 shadow-md
									 overflow-hidden
									 sm:rounded-lg
									 "
						>
						<form method="POST" action="/login">
							<div>
								<label class="block font-medium text-sm text-white">Email</label>
								<input
										class="
													 shadow
													 appearance-none
													 border
													 rounded
													 w-full
													 py-2
													 px-3
													 text-gray-800
													 leading-tight
													 focus:outline-none focus:shadow-outline
													 "
										id="username"
										type="text"
										placeholder="Username"
										/>
							</div>
			<div class="mt-4">
				<label class="block font-medium text-sm text-white">Password</label>
				<input
						class="
									 shadow
									 appearance-none
									 border
									 rounded
									 w-full
									 py-2
									 px-3
									 text-gray-800
									 leading-tight
									 focus:outline-none focus:shadow-outline
									 "
						id="password"
						type="password"
						placeholder="**************"
						/>
			</div>
			<div class="block mt-4">
				<label calss="flex items-center">
					<input class="form-checkbox" type="checkbox" name="remember" />
					<span class="ml-2 text-sm text-white">Remember Me</span>
				</label>
			</div>
			<div class="flex items-center justify-end mt-4">
				<a
						class="underline text-sm text-white hover:text-gray-200"
						href="/forgot-password"
						>
						Forgot your password?
				</a>
					<button
							class="
										 inline
										 flex
										 items-center
										 px-4
										 py-2
										 bg-white
										 border border-white border-opacity-60
										 rounded-md
										 font-semibold
										 text-xs text-black
										 uppercase
										 tracking-widest
										 opacity-100
										 hover:opacity-90
										 focus:outline-none
										 transition
										 ease-in-out
										 duration-150
										 ml-4
										 "
							>
							Login
					</button>
			</div>
						</form>
				</div>
		</div>
	</div>
</template>

<script></script>
