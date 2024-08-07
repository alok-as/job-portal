export type SkillBoxProps = { name: string };

export const SkillBox = ({ name }: SkillBoxProps) => {
	return (
		<div className="bg-[#eff3fc] text-xs px-3 py-2 text-js-grey-100 rounded-md">
			{name}
		</div>
	);
};
