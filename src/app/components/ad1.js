export default function Ad1(){
    const ad ={ __html:`
    <script type="text/javascript">
	atOptions = {
		'key' : '286dc2d72d046f16b7c43cfa6ee77ccc',
		'format' : 'iframe',
		'height' : 250,
		'width' : 300,
		'params' : {}
	};
	document.write('<scr' + 'ipt type="text/javascript" src="//collectbladders.com/286dc2d72d046f16b7c43cfa6ee77ccc/invoke.js"></scr' + 'ipt>');
</script>
    `}
    return(
        <div dangerouslySetInnerHTML={ad}></div>
    )
}