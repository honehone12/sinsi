<script lang="ts">
    import { goto } from "$app/navigation";
    import logo from "$lib/assets/sinsi.png"

    interface Props {
        ref: string;
    }

    let {ref}: Props =  $props();

    function onclickNo() {
        goto('/');
    }
</script>

<div class="card outline outline-fuchsia-500 text-center">
    <h1 class="text-3xl mt-10 mb-5">
        Age Verification
    </h1>
    <figure>
        <img
            src={logo}
            alt="Sinsi logo with illustration of wise man"
            class="size-20 mb-5" 
        />
    </figure>
    <h2 class="text-xl mx-5 mb-10">
        Are you 18 years old or older?
    </h2>
    <form 
        method="post" 
        action="/i-am-sinsi" 
        class="card-action mb-15"
    >
        <input 
            type="hidden" 
            id="ref-ref" 
            name="ref" 
            value={ref}
        >
        <button 
            type="button" 
            onclick={onclickNo}
            class="btn btn-lg w-30 btn-neutral tooltip"
            data-tip="I am too young to be a Sinsi."
        >No</button>
        <button 
            type="submit"
            class="btn btn-lg w-30 ml-5 btn-secondary tooltip"
            data-tip="I am a Sinsi older than 18."
        >Yes</button>
    </form>
    <p class="mb-5 px-5">
        After you select "Yes", a cookie will be stored in your browser.
    </p>
</div>                 
