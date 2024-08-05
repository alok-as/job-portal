import { CandidateSignIn } from "@/components/forms/candidate-sign-in/candidate-sign-in";
import { OauthSignInButton } from "@/components/ui/oauth-sign-in-button";
import { DividerText } from "@/components/ui/divider-text";
import { FormHeader } from "@/components/ui/form-header";

const SignInPage = () => {
	return (
		<section
			id="company-sign-in"
			className="flex items-center justify-center py-24"
		>
			<div className="container">
				<div className="w-full md:w-1/2 lg:w-1/3 mx-auto flex flex-col">
					<FormHeader
						title="Candidate Login"
						subtitle="Access to all features. No credit card required."
						name="Welcome back!"
						className="text-center"
					/>
					<OauthSignInButton>Sign In with Google</OauthSignInButton>
					<DividerText className="my-5">Or continue with</DividerText>
					<CandidateSignIn />
				</div>
			</div>
		</section>
	);
};

export default SignInPage;
