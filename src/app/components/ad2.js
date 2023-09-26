export default function Ad2(){
    const ad ={ __html:`
    <script type="text/javascript">
	atOptions = {
		'key' : '02034458a3beeb36c2a9ce06e28f6641',
		'format' : 'iframe',
		'height' : 60,
		'width' : 468,
		'params' : {}
	};
	document.write('<scr' + 'ipt type="text/javascript" src="//collectbladders.com/02034458a3beeb36c2a9ce06e28f6641/invoke.js"></scr' + 'ipt>');
</script>
    `}
    return(
        <div dangerouslySetInnerHTML={ad}></div>
    )
}