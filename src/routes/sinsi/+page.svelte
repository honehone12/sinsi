<script lang="ts">
    import { page } from '$app/state';
    import { onMount } from 'svelte';
    import { openAgeModal } from "$lib/modal";
    import AgeModal from '$lib/components/AgeModal.svelte';

    let {data} = $props();

    onMount(() => {
        if (data.needAgeVerification) {
            openAgeModal();
        }
    });
</script>

<AgeModal ref={page.url.pathname + page.url.search}/>
<h1 class="text-2xl">
    This is Sinsi Page
</h1>
