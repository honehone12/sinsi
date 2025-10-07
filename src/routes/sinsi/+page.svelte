<script lang="ts">
    import {page} from '$app/state';
    import { onMount } from 'svelte';
    import { openAgeModal } from "$lib/modal";
    import AgeModal from '$lib/components/AgeModal.svelte';

    interface Props {
        needAgeVerification: boolean;
    }

    let {needAgeVerification}: Props = $props();

     onMount(() => {
        if (needAgeVerification) {
            openAgeModal();
        }
    });
</script>

<AgeModal ref={page.url.pathname + page.url.search}/>
<h1>
    This is Sinsi Page.
</h1>
