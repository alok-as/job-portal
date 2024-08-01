import { CompanySignUp } from "@/components/forms/company-sign-up/company-sign-up";
import { CompanySignUpButton } from "@/components/ui/company-sign-up-button";
import { DividerText } from "@/components/ui/divider-text";
import { FormHeader } from "@/components/ui/form-header";

const SignUpPage = () => {
	return (
		<section
			id="company-sign-up"
			className="flex items-center justify-center py-24"
		>
			<div className="container">
				<div className="w-full md:w-1/2 lg:w-1/3 mx-auto flex flex-col">
					<FormHeader
						title="Start Hiring Today"
						subtitle="Access to all features. No credit card required."
						name="Register"
						className="text-center"
					/>
					<CompanySignUpButton />
					<DividerText className="my-5">Or continue with</DividerText>
					<CompanySignUp />
				</div>
			</div>
		</section>
	);
};

export default SignUpPage;
